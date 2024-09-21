module.exports = async function (context, req) {
  const date = "2024-09-21T17:10:50.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

