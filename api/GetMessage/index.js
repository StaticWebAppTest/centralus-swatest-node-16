module.exports = async function (context, req) {
  const date = "2022-03-23T11:08:06.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

