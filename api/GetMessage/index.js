module.exports = async function (context, req) {
  const date = "2023-07-19T07:08:42.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

