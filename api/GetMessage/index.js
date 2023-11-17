module.exports = async function (context, req) {
  const date = "2023-11-17T14:08:40.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

