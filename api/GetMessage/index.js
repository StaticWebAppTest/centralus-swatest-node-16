module.exports = async function (context, req) {
  const date = "2022-10-11T09:18:47.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

