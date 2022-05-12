module.exports = async function (context, req) {
  const date = "2022-05-12T15:11:33.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

