module.exports = async function (context, req) {
  const date = "2022-05-07T15:11:09.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

