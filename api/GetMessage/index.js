module.exports = async function (context, req) {
  const date = "2024-10-12T15:11:11.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

