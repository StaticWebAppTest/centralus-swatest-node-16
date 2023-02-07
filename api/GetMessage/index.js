module.exports = async function (context, req) {
  const date = "2023-02-07T23:09:18.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

