module.exports = async function (context, req) {
  const date = "2022-12-23T18:11:22.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

