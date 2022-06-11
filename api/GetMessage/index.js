module.exports = async function (context, req) {
  const date = "2022-06-11T18:11:32.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

