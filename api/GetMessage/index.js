module.exports = async function (context, req) {
  const date = "2024-07-07T13:10:21.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

