module.exports = async function (context, req) {
  const date = "2022-05-23T09:11:38.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

