module.exports = async function (context, req) {
  const date = "2023-09-09T10:08:07.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

