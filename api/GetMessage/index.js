module.exports = async function (context, req) {
  const date = "2022-10-29T08:15:14.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

