module.exports = async function (context, req) {
  const date = "2022-04-12T00:46:23.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

