module.exports = async function (context, req) {
  const date = "2023-10-13T06:12:19.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

