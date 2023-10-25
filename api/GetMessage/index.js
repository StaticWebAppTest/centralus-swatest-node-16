module.exports = async function (context, req) {
  const date = "2023-10-25T15:08:57.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

