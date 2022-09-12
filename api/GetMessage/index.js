module.exports = async function (context, req) {
  const date = "2022-09-12T18:15:19.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

