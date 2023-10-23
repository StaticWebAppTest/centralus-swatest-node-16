module.exports = async function (context, req) {
  const date = "2023-10-23T06:12:47.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

