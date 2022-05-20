module.exports = async function (context, req) {
  const date = "2022-05-20T15:12:30.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

