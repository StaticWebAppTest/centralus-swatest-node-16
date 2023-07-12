module.exports = async function (context, req) {
  const date = "2023-07-12T09:10:09.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

