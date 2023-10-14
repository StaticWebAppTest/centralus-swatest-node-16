module.exports = async function (context, req) {
  const date = "2023-10-14T06:11:08.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

