module.exports = async function (context, req) {
  const date = "2022-03-11T18:11:52.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

