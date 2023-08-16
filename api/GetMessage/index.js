module.exports = async function (context, req) {
  const date = "2023-08-16T05:08:23.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

