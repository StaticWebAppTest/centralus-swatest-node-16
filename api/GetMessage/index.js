module.exports = async function (context, req) {
  const date = "2023-11-12T13:09:16.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

