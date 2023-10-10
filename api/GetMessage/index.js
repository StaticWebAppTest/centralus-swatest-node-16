module.exports = async function (context, req) {
  const date = "2023-10-10T18:11:57.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

