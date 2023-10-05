module.exports = async function (context, req) {
  const date = "2023-10-05T18:11:50.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

