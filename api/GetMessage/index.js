module.exports = async function (context, req) {
  const date = "2022-07-12T11:19:44.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

