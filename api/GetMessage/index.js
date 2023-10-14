module.exports = async function (context, req) {
  const date = "2023-10-14T21:07:04.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

