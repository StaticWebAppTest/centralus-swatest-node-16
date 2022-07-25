module.exports = async function (context, req) {
  const date = "2022-07-25T18:13:32.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

