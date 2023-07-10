module.exports = async function (context, req) {
  const date = "2023-07-10T10:11:10.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

