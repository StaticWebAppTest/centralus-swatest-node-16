module.exports = async function (context, req) {
  const date = "2022-10-12T05:39:40.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

