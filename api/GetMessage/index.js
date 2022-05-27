module.exports = async function (context, req) {
  const date = "2022-05-27T09:11:44.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

