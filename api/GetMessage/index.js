module.exports = async function (context, req) {
  const date = "2023-07-23T18:09:57.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

