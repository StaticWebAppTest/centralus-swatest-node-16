module.exports = async function (context, req) {
  const date = "2023-05-23T13:12:21.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

