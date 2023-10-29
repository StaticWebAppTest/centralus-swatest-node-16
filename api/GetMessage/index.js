module.exports = async function (context, req) {
  const date = "2023-10-29T14:07:06.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

