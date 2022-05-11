module.exports = async function (context, req) {
  const date = "2022-05-11T09:11:06.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

