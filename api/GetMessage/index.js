module.exports = async function (context, req) {
  const date = "2022-05-24T14:16:11.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

