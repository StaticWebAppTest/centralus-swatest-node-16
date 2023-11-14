module.exports = async function (context, req) {
  const date = "2023-11-14T13:11:52.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

