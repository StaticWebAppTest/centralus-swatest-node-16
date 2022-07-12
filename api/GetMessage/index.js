module.exports = async function (context, req) {
  const date = "2022-07-12T18:13:25.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

