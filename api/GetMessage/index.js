module.exports = async function (context, req) {
  const date = "2023-11-12T18:10:21.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

