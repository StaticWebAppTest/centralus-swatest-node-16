module.exports = async function (context, req) {
  const date = "2023-05-04T13:11:50.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

