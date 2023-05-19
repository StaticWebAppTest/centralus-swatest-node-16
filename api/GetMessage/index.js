module.exports = async function (context, req) {
  const date = "2023-05-19T23:08:45.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

