module.exports = async function (context, req) {
  const date = "2022-02-24T18:11:57.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

