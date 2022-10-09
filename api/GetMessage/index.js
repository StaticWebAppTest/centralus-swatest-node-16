module.exports = async function (context, req) {
  const date = "2022-10-09T14:13:38.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

