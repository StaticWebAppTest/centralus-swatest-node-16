module.exports = async function (context, req) {
  const date = "2023-08-19T11:06:13.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

