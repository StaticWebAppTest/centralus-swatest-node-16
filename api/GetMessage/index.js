module.exports = async function (context, req) {
  const date = "2023-02-28T15:10:21.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

