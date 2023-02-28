module.exports = async function (context, req) {
  const date = "2023-02-28T21:08:57.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

