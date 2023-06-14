module.exports = async function (context, req) {
  const date = "2023-06-14T13:11:50.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

