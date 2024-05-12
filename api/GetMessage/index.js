module.exports = async function (context, req) {
  const date = "2024-05-12T14:08:50.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

