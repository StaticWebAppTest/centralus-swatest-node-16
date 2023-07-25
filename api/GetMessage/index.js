module.exports = async function (context, req) {
  const date = "2023-07-25T18:10:30.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

