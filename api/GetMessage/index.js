module.exports = async function (context, req) {
  const date = "2023-12-14T21:08:09.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

