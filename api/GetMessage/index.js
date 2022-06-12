module.exports = async function (context, req) {
  const date = "2022-06-12T16:13:22.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

